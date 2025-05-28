# Stage 1: Build the React frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json* ./
RUN npm install
COPY ./frontend .
RUN npm run build

# Stage 2: Build the Flask backend
FROM python:3.10-slim
WORKDIR /app/backend
COPY ./backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY ./backend .
# Copy the built React app into the Flask static folder
COPY --from=frontend-build /app/frontend/build ./frontend/build
EXPOSE 5000
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000", "--workers", "4"]
