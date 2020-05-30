To build the server:

`docker build -t rn-bug .`

To run the server:

`docker run -it -p 9091:9091/tcp --rm --name rn-bug-running rn-bug`

To run the app:

```
cd expo
yarn
yarn ios
```