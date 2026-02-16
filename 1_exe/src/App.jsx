import React from 'react'
import './App.css'
import { useState } from 'react';

// 1.1....Task: This is a simple React application that displays a user profile with an avatar, user information, and statistics. The App component serves as the main component that renders the Avatar, UserInfo, and Stats components. Each of these components is responsible for displaying specific information about the user, such as their avatar image, name, email, and social media statistics like followers, following, and posts.

// export default function App() {
//   return (
//     <>
//       <div>
//         <Avatar />
//         <UserInfo />
//         <Stats />

//       </div>
//     </>
//   );
// }

// function Avatar(){
//   const imageUrl = 'https://i.pravatar.cc/300';

//   return(
//     <img src={imageUrl} alt="User Avatar"  />
//   );
// }

// function UserInfo(){
//   const name = 'John Doe';
//   const email = 'johntheDon@gmail.com';
  
//   return(
//     <div>
//       <h2>{name}</h2>
//       <p>{email}</p>
//     </div>
//   );
// }

// function Stats(){
//   const followers = 1200;
//   const following = 300;
//   const posts = 75;

//   return(
//     <div>
//       <p>Followers: {followers}</p>
//       <p>Following: {following}</p>
//       <p>Posts: {posts}</p>
//     </div>
//   );
// }





//1.2...Task: Create a Bio component that displays a short biography............................ 

// export default function App() {
//   const user = {
//     name: 'Ada Lovelace ',
//     introduction: 'The first computer programmer',
//     theme : {
//       backgroundColor: '#f3dbdb',
//       color: '#333',
//     }
//     }

//   return (
//     <>
//       <div style={user.theme}>
//         <h1>{user.name}</h1>
//         <p>{user.introduction}</p>
//       </div>
//     </>
//   );
// }







//1.3...Task: Refactor the ProfileCard from exercise 1.1 to be dynamic................................ 

// export default function App() {
//   const user1 ={
//     name: 'John Doe',
//     email: 'johndoe@gmail.com',
//     followers: 1200,
//     following: 300,
//     posts: 75,
//     imageUrl: 'https://i.pravatar.cc/300',
//   };

//   const user2 ={
//     name: 'steve Smith',
//     email: 'stevesmith@gmail.com',
//     followers: 800,
//     following: 250,
//     posts: 45,
//     imageUrl: 'https://i.pravatar.cc/400',
//   };

//   return(
//     <>
//       <ProfileCard user={user1} />
//       <hr />
//       <ProfileCard user={user2} />
//     </>
//   );
// }

// function ProfileCard({ user }){
//   return(
//     <>
//       <div>
//         <Avatar imageUrl={user.imageUrl} />
//         <UserInfo name={user.name} email={user.email} />
//         <Stats followers={user.followers} following={user.following} posts={user.posts} />
//       </div>
//     </>
//   );

//   function Avatar({ imageUrl }){
//     return(
//       <img src={imageUrl} alt="User Avatar"  />
//     );
//   }

//   function UserInfo({ name, email }){
//     return(
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
  
//   function Stats({ followers, following, posts }){
//     return(
//       <div>
//         <p>Followers: {followers}</p>
//         <p>Following: {following}</p>
//         <p>Posts: {posts}</p>
//       </div>
//     );
//   }
// }




//1.4...Task: Build an Item component for a packing list application...........................

// export default function App(){
//   return(
//     <div>
//       <h2>Packing List</h2>
//       <Item name="Passport" isPacked={true} />
//       <Item name="Sunglasses" isPacked={false} />
//       <Item name="Toothbrush" isPacked={true} />
//     </div>
//   );
// }

// function Item({ name ,  isPacked }){
//   const text = isPacked ? name + 'yes' : name + 'no';
//   return (
//     <>
//       <li>
//         { isPacked ? <del>{text}</del> : text }
//       </li>
//     </>
//   );
// }




//1.5....Task: Create a ScientistList component.....................................................

export default function App(){
  const scientists = [
    { id : 0, name: 'Marie Curie'},
    { id : 1, name: 'Albert Einstein' },
    { id : 2, name: 'Isaac Newton'},
    { id : 3, name: 'Charles Darwin' },
  ];

  return <ScientistList scientists={scientists} />;
}

function ScientistList({ scientists }){
const [list, setList] = useState(scientists);

  function addScientist(){
    const newScientist = { id: Date.now(), name: 'New Scientist ' };
    setList([ newScientist, ...list]);
  }

    return(
      <div>
        <h2>Famous Scientists</h2>
        <button onClick={addScientist}>Add Scientist</button>
        <ul>
          {list.map(scientist => (
            <li key={scientist.id}>{scientist.name}</li>
          ))}
        </ul>
      </div>
    );
}