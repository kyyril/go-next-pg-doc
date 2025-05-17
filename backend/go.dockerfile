FROM golang:1.21-alpine

WORKDIR /app

COPY . .

# Install dependencies
RUN go get -d -v ./...


# Build the Go app
RUN go build -o api .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["./api"]