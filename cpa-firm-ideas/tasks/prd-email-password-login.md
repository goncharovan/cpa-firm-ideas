# Product Requirements Document: Email/Password Login Functionality

## Introduction/Overview

This PRD addresses the critical issue with the email/password login functionality on the CPA Firm Ideas platform. Currently, users can successfully sign up with email and password, but the signin page has a broken form submission that prevents users from logging in with their credentials. This feature is essential for CPA firm owners to access their accounts and manage their firm's information.

**Problem:** The signin page at `/auth/signin` has email and password input fields, but the form submission logic is incomplete, preventing users from successfully logging in with their credentials.

**Goal:** Enable CPA firm owners to successfully login using their email and password while maintaining the existing social login options (Google, LinkedIn).

## Goals

1. **Fix Form Submission:** Implement proper form submission handling for email/password login
2. **Error Handling:** Provide clear, user-friendly error messages for various login failure scenarios
3. **User Experience:** Ensure seamless login flow with appropriate redirects
4. **Security:** Maintain existing security standards while fixing the login functionality
5. **Compatibility:** Preserve existing social login functionality (Google, LinkedIn)

## User Stories

1. **As a CPA firm owner**, I want to sign in with my email and password so that I can access my account and manage my firm's information.

2. **As a CPA firm owner**, I want to see clear error messages if my login fails so that I understand what went wrong and can correct it.

3. **As a CPA firm owner**, I want to be redirected to the appropriate page after successful login so that I can immediately begin using the platform.

4. **As a CPA firm owner**, I want to choose between email/password login or social login so that I can use my preferred authentication method.

## Functional Requirements

1. **Form Submission Fix:** The signin page must properly handle form submissions for email/password authentication using NextAuth's credentials provider.

2. **Input Validation:** The system must validate email format and ensure both email and password fields are not empty before submission.

3. **Authentication Integration:** The system must integrate with the existing NextAuth credentials provider to authenticate users against the database.

4. **Error Display:** The system must display appropriate error messages for:
   - Invalid email format
   - Wrong password
   - Non-existent email address
   - Server errors

5. **Success Handling:** Upon successful authentication, the system must redirect users to the home page (`/`).

6. **Loading States:** The system must show loading indicators during authentication attempts to provide user feedback.

7. **Form Reset:** The system must clear password fields after failed login attempts for security.

8. **Social Login Preservation:** The system must maintain existing Google and LinkedIn login functionality without disruption.

## Non-Goals (Out of Scope)

- Password reset functionality
- "Remember me" functionality
- Two-factor authentication
- Account lockout after failed attempts
- Email verification for new accounts
- Changes to the signup page functionality
- Redesign of the signin page UI/layout
- Changes to social login providers or their configuration

## Design Considerations

- Maintain the current design and layout of the signin page
- Use consistent styling with the existing signup page
- Ensure error messages are clearly visible and styled appropriately
- Loading states should be consistent with the signup page implementation
- Form validation should provide immediate feedback to users

## Technical Considerations

- **NextAuth Integration:** Leverage the existing NextAuth configuration in `src/lib/auth.ts`
- **Database:** Use the existing Prisma setup and User model
- **Password Security:** Maintain the existing bcrypt password hashing (already implemented)
- **Session Management:** Use NextAuth's JWT session strategy (already configured)
- **Error Handling:** Implement proper error handling that doesn't expose sensitive information
- **Form State Management:** Use React state management for form inputs and error states

## Success Metrics

1. **Functional Success:** Users can successfully login with valid email/password combinations
2. **Error Handling:** Users receive appropriate error messages for invalid credentials
3. **User Experience:** Login process is smooth with proper loading states and redirects
4. **Security:** No regression in security standards; passwords remain properly hashed
5. **Compatibility:** Social login functionality remains fully operational

## Open Questions

1. **Redirect After Login:** Should users be redirected to a specific dashboard page instead of the home page?
2. **Session Duration:** Are there any specific requirements for session timeout or persistence?
3. **Rate Limiting:** Should we implement rate limiting for failed login attempts?
4. **Logging:** Should we implement logging for login attempts (successful and failed)?

## Implementation Notes

### Current Issues Identified:
1. The signin page form uses `'use server'` action but doesn't properly handle the form submission
2. The onClick handler for the signin button tries to use `signIn('credentials')` but the form data extraction is unreliable
3. Missing proper error state management and display
4. No loading states during authentication

### Recommended Approach:
1. Convert the signin page to a client component (like the signup page)
2. Implement proper form state management with React hooks
3. Use NextAuth's `signIn('credentials')` function with proper error handling
4. Add loading states and error display similar to the signup page
5. Ensure proper redirect handling after successful authentication

### Files to Modify:
- `src/app/auth/signin/page.tsx` - Main signin page component
- No changes needed to `src/lib/auth.ts` (NextAuth configuration is correct)
- No changes needed to `src/app/api/auth/signup/route.ts` (signup functionality is working)
- No changes needed to Prisma schema or database setup 