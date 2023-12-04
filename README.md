###  비동기를 처리하는 방법 : callback, promise, async/await
1)promise : 내용은 실행되었지만 결과를 아직 반환하지 않은 객체
  1-1) pending,  fulfilled, rejected 세 가지 상태가 있다.
   예)
           const condition = true;
 const promise = new Promise((resolve, reject) => {
   if (condition) {
     resolve('resolved');
   } else {
     reject('rejected');
   }
 });

 promise
   .then((res) => {
     console.log(res);
   })
   .catch((error) => {
     console.error(error);
   });
2) async-await : 가장 최근에 나온 비동기 처리 문법. callback, promise의 단점을 해소하고자 만들어짐
* callback지옥, then() 지옥을 탈피하기 위해 만들어짐
* await을 통해 promise 반환값을 받을 수 있음
* await은 async 함수 안에서만 동직한다.
* async/await 은 Promise 와는 다르게 에러를 핸들링 할 수 있는 기능이 없다. 따라서 try-catch() 문을 활용하여 에러를 핸들링 하여 주어야 한다.
예)
(async () => {
   const condition = true;
   const promise = new Promise((resolve, reject) => {
     if (condition) {
       resolve('resolved');
     } else {
       reject('rejected');
     }
   });

   try {
     const result = await promise;
     console.log(result);
   } catch (err) {
     console.error(err);
   }
 })();

2.  Promise / async-await 차이점
- 에러 핸들링
  Promise 를 활용할 시에는 .catch() 문을 통해 에러 핸들링이 가능하지만, async/await 은 에러 핸들링 할 수 있는 기능이 없어 try-catch() 문을 활용해야 한다
- 코드 가독성
  Promise의 .then() 지옥의 가능성
  코드가 길어지면 길어질수록, async/await 를 활용한 코드가 가독성이 좋다.
  async/await 은 비동기 코드가 동기 코드처럼 읽히게 해준다. 코드 흐름을 이해 하기 쉽다.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
