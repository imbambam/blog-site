import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import myPicture from '../public/mypicture.jpg'

export default function Home() {
  return (

    <div className={styles.myContainer}>
      <div className={styles.card}>
        <img src="C:\Users\Alyssa\Downloads\IMG_4204.JPG" alt="Avatar" className={styles.image} />
        <div className={styles.container}>
          <h1><b>Alyssa Malig Bondoc</b></h1> 
          <p>My name is Alyssa Malig Bondoc, 21 years old, from San Antonio, Mexico, Pampanga. I don't really have that much of a hobby but I have 3 hobbies at the moment which are cycling, cooking and crafting. When it comes to my favorite food, I don’t have a favorite food but anything that is made out of potatoes is mostly what I like (e.g., fries & baked potato). I constantly change my music genre, but I can say that “I Choose by Alessia Cara” is my favorite at the moment. Another simple thing about me is that I love to travel to different places and discover new things about them and the different cultures.</p>
          <p>Ever since I was in my high school days, I wanted to take up IT,  because I wanted to learn more about it and for me to enhance my knowledge especially in graphic design that’s why I took IT as my college degree.</p>
          <p>To be honest, I really don’t want to pursue my career, but since I want to know more about graphic design, I can see myself 10 years from now as a graphic designer and a new successful person. Also I can see myself having my own company wherein my company will offer the best when it comes to people who want to learn graphic designing.</p>
       
          </p>
        </div>
      </div> 
    </div>

  )
}  

          
