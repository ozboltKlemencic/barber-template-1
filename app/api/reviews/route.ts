// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

type Review = {
  author_name: string;
  profile_photo_url?: string;
  text?: string;
  rating: number;
};

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.PLACE_ID;
  
  if (!API_KEY || !PLACE_ID) {
    return NextResponse.json(
      { error: 'Missing API key or Place ID' },
      { status: 500 }
    );
  }
  
  try {
 
    const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=reviews&place_id=${process.env.PLACE_ID}&key=${process.env.GOOGLE_PLACES_API_KEY}&language=sl`;
    
    
   
    console.log('Fetching from URL:', url); // Za debugging
    
    const response = await fetch(url);
    const data = await response.json();

    
    console.log('API Response:', data); // Za debugging

    
    
    if (data.status === 'REQUEST_DENIED') {
      throw new Error(data.error_message || 'API request was denied');
    }
    
    if (!response.ok) {
      throw new Error(data.error_message || 'Failed to fetch reviews');
    }
    
    const reviews = data.result?.reviews || [];
    
    const formattedReviews = reviews.map((review:Review, index:number) => ({
        id: index,
        author: review.author_name,
        avatar: review.profile_photo_url || '', 
        text: review.text || '', 
        rating: review.rating
      }));

    console.log(formattedReviews)
    
    return NextResponse.json(formattedReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}