
# Beauty Salon Website

## Project Structure

```
final-web/
├── src/                    # Source code
│   ├── public/            # Static files
│   │   ├── css/          # Stylesheets
│   │   ├── js/           # Client-side JavaScript
│   │   └── images/       # Image assets
│   ├── views/            # EJS templates
│   ├── controllers/      # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # Route definitions
│   ├── config/           # Configuration files
│   └── middleware/       # Custom middleware
├── backend/              # Backend server code
└── node_modules/         # Dependencies
```

## File Organization

### Static Files
- All CSS files go in `src/public/css/`
- All JavaScript files go in `src/public/js/`
- All images go in `src/public/images/`

### Views
- All EJS templates go in `src/views/`
- HTML files will be converted to EJS templates

### Backend
- Server configuration in `backend/`
- Authentication logic in `src/routes/`
- Database models in `src/models/`

## Setup Instructions
1. Install dependencies: `npm install`
2. Configure environment variables
3. Start the server: `npm start`