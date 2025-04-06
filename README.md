# Comic Todo - A Comic Book Themed Todo Application

A fun and visually appealing todo application with a comic book theme, built with React and Supabase.

## Features

- Comic book themed UI with bold typography and vibrant colors
- User authentication (signup/login)
- Create, read, update, and delete todos
- Optional todo descriptions
- Responsive design
- Secure user-specific data storage

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Supabase account

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd comic-todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Set up your Supabase database:
   - Create a new project in Supabase
   - Create a `todos` table with the following schema:
     ```sql
     create table todos (
       id uuid default uuid_generate_v4() primary key,
       created_at timestamp with time zone default timezone('utc'::text, now()) not null,
       title text not null,
       description text,
       completed boolean default false,
       user_id uuid references auth.users not null
     );
     ```

5. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Sign up for a new account or log in with existing credentials
2. Add new todos using the form at the top of the page
3. Mark todos as complete by clicking the checkbox
4. Delete todos using the delete button
5. Add optional descriptions to your todos

## Styling

The application uses a comic book theme with:
- Bold, stylized fonts (Bangers and Comic Neue)
- Vibrant color scheme
- Comic panel borders
- Speech bubble notifications
- Action line accents
- Shadow effects for depth

## Security

- User authentication is handled by Supabase Auth
- Each user can only access their own todos
- Passwords are securely hashed
- API keys are stored in environment variables

## Future Enhancements

- Task prioritization
- Due dates
- Categories/tags
- Real-time updates using Supabase Realtime
- Dark mode
- Task search and filtering
- Export/import functionality

## Contributing

Feel free to submit issues and enhancement requests! 