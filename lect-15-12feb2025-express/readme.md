# Express Middleware Example

This is a simple Express.js application that demonstrates the use of middleware in handling different routes.

## Project Setup

### Prerequisites
Ensure you have Node.js installed on your system.

### Installation
1. Clone this repository or create a new directory and navigate into it.
2. Initialize a Node.js project if not already done:
   ```sh
   npm init -y
   ```
3. Install Express:
   ```sh
   npm install express
   ```

## Application Structure
The application includes middleware for logging request time, verifying an OTP for the `/payment` route, and handling requests for different endpoints.

### Middleware
- **Universal Middleware**: Logs the request timestamp.
- **OTP Verification Middleware**: Checks for an OTP query parameter before allowing access to `/payment`.
- **Route-Specific Middleware**:
  - `/payment`: Ensures OTP verification before proceeding.
  - `/g23`: Logs when the route is accessed.

## Usage

### Start the Server
Run the application using:
```sh
node index.js
```

### Available Routes

1. **Home Route:**
   ```sh
   GET http://localhost:3000/
   ```
   Response: `Hello G23 Payment Page`

2. **Payment Route:**
   ```sh
   GET http://localhost:3000/payment
   ```
   - Without OTP: Response `OTP is wrong`
   - With valid OTP (`1234`): Response `Payment Page`
   ```sh
   GET http://localhost:3000/payment?otp=1234
   ```

3. **G23 Route:**
   ```sh
   GET http://localhost:3000/g23
   ```
   Middleware logs `G23 middleware`

### Server Output
When running, the console will log:
```sh
Server is running on http://localhost:3000
```

## License
This project is open-source and available for use under the MIT License.

---
Happy Coding! 🚀

