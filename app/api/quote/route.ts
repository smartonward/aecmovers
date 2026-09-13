import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Server configuration error: Database keys are missing.");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const body = await request.json();
    const { firstName, lastName, email, phone, state, additionalInfo } = body;

    // Validate required fields
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: 'First name and Contact No are required.' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    // We assume there is a table called "quotes"
    const { data, error } = await supabase
      .from('quotes')
      .insert([
        {
          first_name: firstName,
          last_name: lastName || null,
          email: email || null,
          phone: phone,
          state: state || null,
          additional_info: additionalInfo || null,
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true, message: 'Quote request saved to database successfully.' });
  } catch (error: any) {
    console.error('Error saving quote:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process request.' },
      { status: 500 }
    );
  }
}
