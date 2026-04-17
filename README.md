# Yoshanbao - Person Search & Contact Manager

## Summary

**Yoshanbao** is a modern contact management application built with **Next.js 16** and **React 19**, designed to help users efficiently manage and search through a directory of people. The application demonstrates advanced web development practices including server-side rendering, real-time search capabilities, and comprehensive CRUD (Create, Read, Update, Delete) operations.

### Key Highlights

- Directory Management: Browse and manage 30+ sample contacts in a searchable directory
- Advanced DataTable: Powered by TanStack React Table with pagination, sorting, and filtering
- Real-time Search: Instant search filtering across all contact fields
- Full CRUD Operations: Create, read, update, and delete contacts seamlessly
- Modern UI: Built with Shadcn/ui components and Tailwind CSS
- Dark/Light Theme: Complete theme support with next-themes
- Responsive Design: Fully responsive across all devices (mobile, tablet, desktop)
- Type-Safe: Full TypeScript support with Zod schema validation
- Performance Optimized: Next.js 16 with Turbopack and server components

### Application Pages

- **Home** (`/`) - Landing page with app overview
- **Directory** (`/directory`) - Contact management with datatable and CRUD operations
- **About** (`/about`) - Application architecture and technology stack
- **Database** (`/database`) - Database schema and implementation details
- **GitHub** (`/github`) - Repository information and project structure

---

## MCP (Model Context Protocol) Integration

Yoshanbao includes a complete MCP server that enables **Claude Desktop** to perform database CRUD operations through natural language!

### MCP Setup Guide

#### Prerequisites
- Node.js 18+
- pnpm package manager
- Claude Desktop application
- PostgreSQL database (Neon or local)

#### Step 1: Install MCP Server Dependencies
```bash
cd mcp-server
pnpm install
```

#### Step 2: Configure Environment
Create `mcp-server/.env`:
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
NODE_ENV=production
```

#### Step 3: Build the MCP Server
```bash
cd mcp-server
pnpm build
```

Verify the build: Check that `mcp-server/dist/index.js` exists ✓

#### Step 4: Configure Claude Desktop
Edit `~/.claude_desktop_config.json`:

**Windows:**
```json
{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["C:\\Users\\YourUsername\\path\\to\\person-search-tomas-next15\\mcp-server\\dist\\index.js"],
      "env": {
        "DATABASE_URL": "your-database-url"
      }
    }
  }
}
```

**Mac/Linux:**
```json
{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["/Users/username/path/to/person-search-tomas-next15/mcp-server/dist/index.js"],
      "env": {
        "DATABASE_URL": "your-database-url"
      }
    }
  }
}
```

#### Step 5: Restart Claude Desktop
Close Claude Desktop completely and reopen it.

### MCP Demo - Use Claude to Manage Your Database

Once configured, you can use Claude Desktop to perform all database operations:

#### Create a Person
```
"Create a new user named John Smith with email john@smith.com and phone 0422018632"
```
Claude responds: Creates user and returns the ID and details.

#### Search for Persons
```
"Find all users named John"
"Search for users with email smith"
"Get user with ID abc123xyz"
```
Claude responds: Returns matching user records.

#### Update a Person
```
"Update John Smith's email to john.new@example.com"
"Change user abc123 phone to 0422999888"
```
Claude responds: Updates and returns the modified user.

#### Delete a Person
```
"Delete John Smith from the database"
"Remove user abc123"
```
Claude responds: Deletes and confirms removal.

#### List All Persons
```
"Show me all users in the database"
"List everyone"
```
Claude responds: Returns all persons with their details.

### MCP Tools Available

| Tool | Description | Parameters |
|------|-------------|-----------|
| `create_user` | Create new person | name, email, phoneNumber |
| `read_user` | Search or get person | userId (optional), searchQuery (optional) |
| `update_user` | Modify person | userId, name (opt), email (opt), phoneNumber (opt) |
| `delete_user` | Remove person | userId |
| `list_all_users` | Get all persons | (none) |

### MCP Validation Rules

- **Email**: Must be valid format (e.g., john@example.com)
- **Phone**: Must be Australian format (04xxxxxxxx) - 10 digits starting with 04
- **Name**: Minimum 2 characters
- **Email**: Must be unique in database

### Testing the MCP Server

#### Run Locally
```bash
cd mcp-server
pnpm dev    # Development with hot reload
# or
pnpm start  # Production mode
```

#### View Database
```bash
cd mcp-server
npx prisma studio    # Opens database UI
```

---

## Screenshots & Proof of Concept

### Web Application Screenshots

#### 1. Directory Management Page
![Directory Page](img/directory-img.png)

The main directory page showcases the complete contact management interface with:
- Clean, organized table displaying all 30+ contacts
- Real-time search functionality
- Sortable columns (Name, Email, Phone)
- Pagination controls for easy navigation
- Action buttons (Edit, Delete) on each row
- "Add Person" button for quick contact creation

#### 2. Add Person (Create Operation)
![Add Person Dialog](img/claude-add.png)

The Add Person dialog demonstrates the create functionality:
- Form with Name, Email, and Phone fields
- Client-side and server-side validation
- Success notification upon submission
- Automatically updates the directory table
- Fields are cleared after successful submission

#### 3. Edit Person (Update Operation)
![Edit Person Dialog](img/claude-update.png)

The Edit Person feature shows the update capability:
- Pre-populated form with existing contact data
- Ability to modify any contact field
- Validation ensures data integrity
- Updated record reflects immediately in the table
- Confirmation feedback after successful update

#### 4. Delete Person (Delete Operation)
![Delete Confirmation](img/claude-delete.png)

The Delete Person feature demonstrates the delete operation:
- Confirmation dialog before deletion
- Prevents accidental deletion
- Record removed immediately from the table
- Toast notification confirming deletion
- Database updated in real-time

---

### MCP Integration with Claude Desktop

#### 5. Claude Developer Settings - MCP Configuration
![Claude Developer Settings](img/mcp-person-search.png)

This screenshot proves the MCP server is properly configured in Claude Desktop:
- Shows "person-search" listed in the Model Context Protocol section
- Displays the MCP server status and configuration
- Confirms the server is available for Claude to use
- Demonstrates successful setup of Claude Desktop integration

#### 6. Claude Create User Example
![Claude Create User](img/claude-add.png)

Claude successfully creates a user through the MCP interface:
- User prompts Claude: "Create a new user named Sarah Johnson with email sarah@example.com and phone +1-555-0123"
- Claude uses the `create_user` MCP tool
- Returns confirmation with new user ID
- Database is updated with the new contact

#### 7. Claude Read User Example
![Claude Read User](img/claude-read.png)

Claude reads and searches users from the database:
- Claude retrieves specific users by ID
- Searches users by name with natural language
- Returns formatted user data with all fields
- Demonstrates read capabilities of the MCP

#### 8. Claude Update User Example
![Claude Update User](img/claude-update.png)

Claude modifies existing user records:
- Updates contact information based on natural language requests
- Returns the updated user record
- Shows before/after values
- Confirms successful update in database

#### 9. Claude Delete User Example
![Claude Delete User](img/claude-delete.png)

Claude successfully deletes Sarah Johnson (and other users) from the database:
- Claude receives natural language deletion request: "Delete Sarah Johnson from the database"
- Uses the `delete_user` MCP tool to remove the record
- Returns confirmation showing which user was deleted (Sarah Johnson)
- Provides feedback on successful deletion
- Database is immediately updated - Sarah Johnson record removed
- Demonstrates complete delete workflow through Claude integration

---

### Database Proof of Concept

#### 10. Neon Database - Sarah Johnson Creation Evidence
![Neon Database Creation](img/neon-data.png)

This screenshot proves Sarah Johnson was successfully created in the Neon PostgreSQL database:
- Shows Sarah Johnson's record in the Neon database interface
- Displays User ID and creation timestamp
- Full contact information persisted: Name, Email, Phone (0422018632)
- Demonstrates real data persistence in the cloud database
- Proof that MCP operations through Claude actually modify the real database
- Verifies end-to-end integration: Claude → MCP Server → Prisma → Neon PostgreSQL

#### 11. Neon Database - Complete Database View
![Neon Database](img/neon-database.png)

The complete Neon database showing all managed contacts:
- All 30+ contacts with their complete information
- Sarah Johnson entry visible among the records
- Demonstrates data integrity and relationships
- Shows live Neon database connection working correctly
- Proves all CRUD operations successfully persist to the database

#### 12. Light Mode Theme - TanStack Table Interface
![Light Mode Interface](img/tanstak-lightmode.png)

The application supports dynamic theme switching with a clean light mode:
- Shows the TanStack React Table in light mode
- Directory page displays with light background and dark text for optimal readability
- Theme toggle button in navbar allows seamless switching between light and dark modes
- All UI components (buttons, inputs, tables) adapt to light theme
- Demonstrates full responsiveness of the theme system
- Users can switch themes at any time while maintaining functionality

---

## Complete Data Flow Summary

1. **User creates/updates/deletes contact via web app**
   - Data validated with Zod schemas
   - Server action processes the request
   - Prisma ORM updates PostgreSQL database (Neon)
   - React component updates in real-time

2. **Claude uses MCP to manage contacts**
   - Claude sends natural language command
   - MCP server interprets the request
   - Database operation executed via Prisma
   - Response returned to Claude with confirmation
   - Data persisted to Neon PostgreSQL

3. **Database proves it all works**
   - Sarah Johnson record exists in Neon
   - Timestamps show when records were created
   - All CRUD operations leave permanent traces
   - Live database connection maintains data integrity

---

## Mobile-First Responsive Design

Yoshanbao is fully optimized for mobile devices with a mobile-first approach using Tailwind CSS responsive breakpoints.

### Mobile Features

- **Responsive Navigation**: Hamburger menu on mobile (< 768px), full navigation on desktop
- **Touch-Friendly Interface**: All buttons and interactive elements are properly sized for mobile (44x44px minimum)
- **Adaptive Layouts**: Components stack vertically on mobile and expand horizontally on larger screens
- **Optimized Tables**: Data tables have horizontal scrolling on mobile for better readability
- **Full-Width Forms**: Buttons and forms adapt to mobile screens for better usability
- **Responsive Typography**: Text sizes scale appropriately across all device sizes

### Mobile Screenshots

**Mobile Home Page** - Clean, intuitive search interface optimized for mobile:
- Responsive heading that scales with screen size
- Full-width search input for easy interaction
- Large touch targets for buttons
- Optimized "How it works" section

**Mobile Directory with Navigation Menu**:
- Hamburger menu toggles on mobile devices
- All navigation links accessible and organized vertically
- Theme toggle always visible
- Full-width "Add Person" button on mobile

**Mobile Directory Table**:
- Horizontal scrolling for contact information
- Responsive table cells with appropriate padding
- Compact view on small screens
- Pagination controls adapt to mobile layout

### Responsive Breakpoints

- **Mobile (< 640px)**: Optimized for phones in portrait mode
- **Small (640px - 768px)**: Enhanced layout for small tablets and landscape phones
- **Medium (768px - 1024px)**: Tablet-optimized layout
- **Large (1024px+)**: Full desktop experience

For detailed mobile optimization information, see [docs/mobile-optimization.md](docs/mobile-optimization.md).

---

## Visual Guide - Core Features Walkthrough

### 1. Directory Overview
The main directory page displays all 30+ contacts in a clean, organized interface with search and pagination capabilities.

![Directory View](img/directory-img.png)

**Purpose**: The directory page (`/directory`) serves as the main hub for contact management. It displays all contacts in a TanStack React Table with columns for Name, Email, Phone, and Actions. Features include:
- Real-time search filtering by contact name
- Pagination (10 items per page)
- Sorting by column headers
- Quick access to edit and delete operations

---

### 2. Add Person Feature
Click the "Add Person" button to open a dialog for creating new contacts.

![Add Person Dialog](img/add-person.png)

**Purpose**: The Add Person feature allows users to quickly add new contacts to the directory. The dialog includes:
- **Name field**: Enter the contact's full name (minimum 2 characters)
- **Email field**: Enter a valid email address
- **Phone field**: Enter Australian phone number format (04XXXXXXXX)
- Form validation using Zod ensures all data meets requirements
- Server action (`addUser`) processes the submission and updates the directory in real-time

---

### 3. Edit Person Feature
Click the "Edit" button on any row to modify contact details.

![Edit Dialog](img/edit-img.png)

**Purpose**: The Edit feature enables users to update existing contact information. It:
- Pre-fills the form with current contact data
- Allows modification of Name, Email, and Phone Number
- Uses the same validation rules as the Add feature
- Server action (`updateUser`) persists changes immediately
- Automatically refreshes the directory view after successful update

---

### 4. Delete Person Feature
Click the three-dot menu (⋯) on any row and select Delete to remove a contact.

![Delete Menu](img/delete-img.png)

**Purpose**: The Delete feature provides a quick way to remove contacts from the directory. It:
- Displays a confirmation menu when clicking the action button
- Shows a Delete option to remove the contact
- Uses server action (`deleteUser`) for secure deletion
- Automatically updates the directory after deletion
- Provides toast notification feedback on success

---

### 5. TanStack React Table - Light Mode Implementation
The datatable is built with TanStack React Table, featuring advanced data management capabilities.

![TanStack DataTable Light Mode](img/tanstak-lightmode.png)

**Purpose**: TanStack React Table powers the advanced datatable functionality with:
- **Pagination**: Navigate through large contact lists (10 items per page with Previous/Next controls)
- **Real-time Search**: Filter contacts by name instantly as you type
- **Sorting**: Click column headers to sort by Name, Email, or Phone
- **CRUD Actions**: Each row includes Edit and Delete buttons for easy management
- **Responsive Design**: Adapts seamlessly to different screen sizes
- **Light & Dark Mode**: Full theme support with Tailwind CSS

**Implementation Details**:
- Column definitions in `app/components/directory-columns.tsx`
- DataTable component in `app/components/data-table.tsx`
- Server-side data fetching with `getAllUsers()` action
- Client-side filtering, sorting, and pagination with React hooks

## Description

Person Search is a Next.js application upgraded to leverage **Next.js 16** and **React 19.2**. It demonstrates advanced search functionality using Next.js Server Components and react-select's `AsyncSelect` component. Users can search for people from a pre-populated list and view detailed information about the selected person.

The upgrade to Next.js 16 builds upon the async API changes from Next.js 15, with Turbopack now enabled by default and various performance improvements. See [docs/upgrading-next-16.md](docs/upgrading-next-16.md) for detailed upgrade notes.

## Features

- Asynchronous search functionality
- Server-side filtering of user data
- Server-rendered and hydrated client-side components
- Single data fetch for improved performance
- Responsive design using Tailwind CSS
- Accessibility-focused UI components from Radix UI
- Custom fonts (Geist Sans and Geist Mono)
- Improved type safety with TypeScript
- Modular and reusable component architecture

## Technologies Used

- **Next.js 16** - React framework with Turbopack by default
- **React 19.2** - Latest React version with View Transitions, useEffectEvent, and Activity
- **TypeScript 5+** - Strongly-typed superset of JavaScript
- **Node.js 20.9+** - Required for compatibility with Next.js 16
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Collection of accessible, unstyled UI components
- **React Hook Form** - Performant and flexible forms library
- **Zod** - TypeScript-first schema declaration and validation library
- **React Select** - Flexible Select Input control for React
- **Sonner** - Lightweight toast notifications for React

### Minimum Node.js Version

The application requires **Node.js 20.9.0** or newer. Node.js 18 is no longer supported in Next.js 16.

## Getting Started


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gocallum/person-search.git
   cd person-search
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

### Running the Development Server

```bash
pnpm dev
```

### Other Commands

```bash
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## How It Works (Next.js 16 & React 19.2)

### Key Changes in `UserSearch` Component

1. **Server Component Design**:
   - The `user-search` component is now a **Server Component**, leveraging `searchParams` and fetching user details server-side.
   - `searchParams` are asynchronous (mandatory in Next.js 16 - synchronous access has been fully removed).

   ```tsx
   export default async function UserSearch({ searchParams }: { searchParams: Promise<{ userId?: string }> }) {
     const resolvedSearchParams = await searchParams;
     const selectedUserId = resolvedSearchParams?.userId || null;
     const user = selectedUserId ? await getUserById(selectedUserId) : null;

     return (
       <div className="space-y-6">
         <SearchInput />
         {selectedUserId && (
           <Suspense fallback={<p>Loading user...</p>}>
             {user ? <UserCard user={user} /> : <p>User not found</p>}
           </Suspense>
         )}
       </div>
     );
   }
   ```

2. **Improved Performance**:
   - Data fetching has been optimized to avoid redundant calls. The user object is fetched once in `user-search` and passed as a prop to child components like `UserCard` and `DeleteButton`.
   - This eliminates multiple fetches, improving performance and reducing server load.

3. **Interaction with `SearchInput`**:
   - `SearchInput` remains a **Client Component**, responsible for interacting with the user through `react-select`'s `AsyncSelect`.
   - When a user is selected, the URL is updated with the user's ID using `window.history.pushState`. This triggers a re-render of `user-search` to reflect the updated state.

4. **Improved Error Handling**:
   - Validations and controlled/uncontrolled input warnings have been resolved by ensuring consistent handling in forms using React Hook Form and Zod.

5. **Concurrency & Hydration**:
   - React 19.2's concurrent rendering and Next.js 16's support for server components ensure seamless server-client hydration, reducing potential mismatches.

### Known Issues

1. **Toast Messages**:
   - Notifications in `DeleteButton` and `MutableDialog` are currently not showing. This requires debugging the integration of the `Sonner` toast library.

2. **Theme Support**:
   - The `theme-provider` for managing dark and light modes has been removed temporarily. The Tailwind stylesheets need to be updated to align with the new Next.js configuration.

3. **Hydration Warnings**:
   - Some hydration warnings may occur due to external browser extensions like Grammarly or differences in runtime environments. Suppression flags have been added, but further testing is recommended.

---

### Updated Project Structure

```
person-search/
├── app/
│   ├── components/
│   │   ├── user-search.tsx
│   │   ├── search-input.tsx
│   │   ├── user-card.tsx
│   │   ├── user-dialog.tsx
│   │   └── user-form.tsx
│   ├── actions/
│   │   ├── actions.ts
│   │   └── schemas.ts
│   └── page.tsx
├── public/
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Using `MutableDialog`

The `MutableDialog` component is a reusable dialog framework that can be used for both "Add" and "Edit" operations. It integrates form validation with Zod and React Hook Form, and supports passing default values for edit operations.

#### How `MutableDialog` Works

`MutableDialog` accepts the following props:
- **`formSchema`**: A Zod schema defining the validation rules for the form.
- **`FormComponent`**: A React component responsible for rendering the form fields.
- **`action`**: A function to handle the form submission (e.g., adding or updating a user).
- **`defaultValues`**: Initial values for the form fields, used for editing existing data.
- **`triggerButtonLabel`**: Label for the button that triggers the dialog.
- **`addDialogTitle` / `editDialogTitle`**: Titles for the "Add" and "Edit" modes.
- **`dialogDescription`**: Description displayed inside the dialog.
- **`submitButtonLabel`**: Label for the submit button.

#### Example: Add Operation

To use `MutableDialog` for adding a new user:

```tsx
import { MutableDialog } from './components/mutable-dialog';
import { userFormSchema, UserFormData } from './actions/schemas';
import { addUser } from './actions/actions';
import { UserForm } from './components/user-form';

export function UserAddDialog() {
  const handleAddUser = async (data: UserFormData) => {
    try {
      const newUser = await addUser(data);
      return {
        success: true,
        message: `User ${newUser.name} added successfully`,
        data: newUser,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to add user: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  };

  return (
    <MutableDialog<UserFormData>
      formSchema={userFormSchema}
      FormComponent={UserForm}
      action={handleAddUser}
      triggerButtonLabel="Add User"
      addDialogTitle="Add New User"
      dialogDescription="Fill out the form below to add a new user."
      submitButtonLabel="Save"
    />
  );
}
```

#### Example: Edit Operation

To use `MutableDialog` for editing an existing user:

```tsx
import { MutableDialog } from './components/mutable-dialog';
import { userFormSchema, UserFormData } from './actions/schemas';
import { updateUser } from './actions/actions';
import { UserForm } from './components/user-form';

export function UserEditDialog({ user }: { user: UserFormData }) {
  const handleUpdateUser = async (data: UserFormData) => {
    try {
      const updatedUser = await updateUser(user.id, data);
      return {
        success: true,
        message: `User ${updatedUser.name} updated successfully`,
        data: updatedUser,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  };

  return (
    <MutableDialog<UserFormData>
      formSchema={userFormSchema}
      FormComponent={UserForm}
      action={handleUpdateUser}
      defaultValues={user} // Pre-fill form fields with user data
      triggerButtonLabel="Edit User"
      editDialogTitle="Edit User Details"
      dialogDescription="Modify the details below and click save to update the user."
      submitButtonLabel="Update"
    />
  );
}
```

### Note: Future Refactoring for `ActionState` with React 19

The `MutableDialog` component currently uses a custom `ActionState` type to handle the result of form submissions. However, React 19 introduces built-in support for `ActionState` in Server Actions, which can simplify this implementation. 

#### Improvements to Make:
- Replace the custom `ActionState` interface with React 19's built-in `ActionState`.
- Use the `ActionState` directly within the form submission logic to align with React 19 best practices.
- Refactor error handling and success notifications to leverage React's server-side error handling.

This will be addressed in a future update to ensure the `MutableDialog` component remains aligned with React 19's capabilities.

---

## 🎨 Recent Mobile Optimization Update (April 2026)

### Mobile-First Responsive Design Implementation

The application has been fully optimized for mobile and tablet viewing with a comprehensive mobile-first responsive design approach using Tailwind CSS.

#### Key Improvements

1. **Responsive Navigation Bar**
   - Hamburger menu for mobile devices (< 768px)
   - Full navigation bar on desktop (≥ 768px)
   - Theme toggle always accessible
   - Smooth animations and transitions
   - Touch-friendly menu interactions

2. **Typography & Spacing**
   - Responsive heading sizes: `text-2xl sm:text-3xl lg:text-4xl`
   - Adaptive text scaling for all screen sizes
   - Responsive padding and margins throughout
   - Better readability on small screens

3. **Component Optimizations**
   - **User Card**: Stacks vertically on mobile, horizontal on desktop
   - **Data Table**: Horizontal scrolling on mobile with compact padding
   - **Buttons**: Full-width on mobile, auto-width on desktop
   - **Forms**: Optimized input sizes for mobile touch interaction
   - **Search Input**: Full-width responsive behavior

4. **Layout Enhancements**
   - Flexible grid layouts that adapt to screen size
   - Proper max-width constraints with responsive containers
   - Efficient use of Tailwind breakpoints (sm, md, lg)
   - Proper overflow handling for mobile devices

5. **All Pages Optimized**
   - ✅ Home page - Responsive typography and spacing
   - ✅ Directory page - Mobile-friendly headers and full-width controls
   - ✅ About page - Grid layout adapts (1 col mobile, 2 col tablet+)
   - ✅ Database page - Better code block handling
   - ✅ GitHub page - Compact responsive layout

### Mobile Testing Coverage

- Tested on iPhone 12 viewport (390x844)
- Verified on various tablet sizes
- Desktop experience maintained
- All interactive elements properly sized (44x44px minimum)
- Proper contrast and accessibility maintained

### Browser Support

- iOS Safari 12+
- Chrome Android 87+
- Firefox Android 88+
- Samsung Internet 14+
- All modern browsers with CSS Grid and Flexbox support

### Responsive Breakpoints Used

```
sm:  640px  - Small tablets and landscape phones
md:  768px  - Tablets (where hamburger menu hides)
lg:  1024px - Large tablets and desktops
xl:  1280px - Large desktops
```

For detailed implementation notes, see [docs/mobile-optimization.md](docs/mobile-optimization.md).

---

## Contributing

Contributions are welcome! Please submit a Pull Request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).


## Contact

Callum Bir - [@callumbir](https://twitter.com/callumbir)  
Project Link: [https://github.com/gocallum/person-search](https://github.com/gocallum/person-search)  

