# GetInTouch Component

A React component that displays contact information for Vardaan Global offices in different countries, along with a contact form.

## Features

- **Country Selection**: Users can select from 5 countries (India, Malaysia, UAE, UK, USA)
- **Dynamic Content**: Address, contact numbers, and map locations change based on selected country
- **Responsive Design**: Different layouts for desktop and mobile views
- **Form Validation**: Required fields are validated before submission
- **Persistent Selection**: Selected country is saved in localStorage
- **Loading States**: Loading animation during form submission
- **Success/Error Feedback**: Dialog popups for form submission status
- **Back to Top**: Button to scroll back to the top of the page

## Implementation Details

### Structure

The component is split into two main views:
1. **Desktop View**: Two-column layout with map on the left, contact details and form on the right
2. **Mobile View**: Single column layout with contact details, form, and map stacked vertically

### Country Data

Each country includes:
- Name
- Flag image path
- Address (multi-line)
- Phone number(s)
- Google Maps embed URL

### Form Processing

The form collects:
- Name
- Email
- Subject
- Additional subject information
- Phone number (optional)

### Dependencies

- React
- React Hooks (useState, useEffect)
- localStorage API

## Setup Instructions

1. Place flag images in the public/images/flags/ directory with the following names:
   - India.png
   - Malaysia.png
   - UAE.png
   - UK.png
   - USA.png

2. Make sure the GetInTouch.css file is in the components directory

3. Import the component where needed:
   ```jsx
   import GetInTouch from './pages/GetInTouch';
   ```

4. Add it to your routes:
   ```jsx
   <Route path="/get-in-touch" element={<GetInTouch />} />
   ```

## Customization

- Colors: The primary color (#5744FF) can be changed in the CSS file
- Form Fields: Additional fields can be added to the form as needed
- Country Data: Add or remove countries by modifying the countryData object 