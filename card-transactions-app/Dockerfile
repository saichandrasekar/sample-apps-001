# syntax=docker/dockerfile:1

FROM golang:1.20

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /card-transactions-app

EXPOSE 18000

CMD [ "/card-transactions-app" ]