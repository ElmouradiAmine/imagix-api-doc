define({ "api": [
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login the user and send back the token.",
    "version": "0.1.0",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of the user for authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"5f2876a1b1df058383363a9d\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI4NzZhMWIxZGYwNTgzODMzNjNhOWQiLCJpYXQiOjE1OTY0OTIzNzR9.AOZYQoJneb_jPFZA12iwBC0FcNAgh-W97G9jzUXN03U\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongCredentiels",
            "description": "<p>Email or password is wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentiels",
            "description": "<p>Email or password is in the wrong format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-WrongCredentiels:",
          "content": "HTTP/1.1 401 Access Denied\n{\n  \"error\": \"WrongCredentiels\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-InvalidCredentiels:",
          "content": "HTTP/1.1 400 Bad Format\n{\n  \"error\": \"InvalidCredentiels\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register the user",
    "version": "0.1.0",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..255",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..1024",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"Amine Elmouradi\",\n  \"email\": \"elmouradi.amine98@gmail.com\",\n     \"password\": \"aminetest1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": \"5f2876a1b1df058383363a9d\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailAlreadyInUse",
            "description": "<p>Email or password is wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentiels",
            "description": "<p>Username, Email or password is wrong.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-EmailAlreadyInUse:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"EmailAlreadyInUse\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-InvalidCredentiels:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidCredentiels\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/user.js",
    "groupTitle": "User"
  }
] });