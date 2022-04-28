/** 
 * 1.create a new project on console.google.com 
 * 2.npm install firebase
 * 3.create firebase.init.js and import getAuth and export auth variable with app parameter
 * 4. firebase settings> Authentication> enable Email and Password auth
 * 5. create login signUp component and sset up route
 * 6.attach form field handler and form submit handler
 * 7. npm install -- save react-firebase-hooks
 * 8. useCreateUserWithEmailPassword from react-firebase-hooks
 * 9.if user is created then redirect to the expected field
 * 10.useSignInWithEmailAndPassword(auth) for sign in
 * 11.create require auth component ==> check user exists also tract user location
 * 12. in route wrap protected Component by using Require Auth Component
*/ 

/**
 * Firebase hosting steps
 * 1.npm install -g firebase-tools(one time for computer)
 * 2.firebase login(one time for computer)
 * 3.firebase init(one time for each project)
 * 4.npm run build(everytime when you update anything in your project)
 * 4.firebase deploy(everytime when you update anything in your project)
*/