import React,{useState} from 'react'
import HeaderText from '../HeaderText'
import Button from "../Button";
import SosialMedia from '../SosialMedia'
import Cnn from "../../SourceFiles/Footer/As Soon On/Cnn.png";
import Cnbc from "../../SourceFiles/Footer/As Soon On/Cnbc.png";
import Bbc from "../../SourceFiles/Footer/As Soon On/Bbc.png";
import  Cbc from "../../SourceFiles/Footer/As Soon On/Cbc.png";
import Header from './Header';
import RecentPost from '../RecentPost';
import FlexBox from '../FlexBox';
import Dr from "../../SourceFiles/SosialMedia/behance.png";
import Be from "../../SourceFiles/SosialMedia/dribbble.png";
import In from "../../SourceFiles/SosialMedia/linkedin.png";
import Rp1 from "../../SourceFiles/Footer/p3.jpg"
import Rp2 from "../../SourceFiles/Footer/p6.jpg"
import Rp3 from "../../SourceFiles/Footer/p7.jpg"
import Rp4 from "../../SourceFiles/Footer/p8.jpg"
import Rp5 from "../../SourceFiles/Footer/p9.jpg"

function Footer() {
    const [sm, setsm] = useState([
        {
            name: "Behance",
            link : 'https://www.behance.net/onboarding/adobe',
            img: Be,
          },
          {
            name: "Dribbble",
            link : 'https://www.behance.net/onboarding/adobe',
            img: Dr,
          },
          {
            name: "Likedin",
            link : 'https://www.behance.net/onboarding/adobe',
            img: In,
          }
    ])

    const [Repost, setRepost] = useState([
        {
            name : 'Lorem Ipsum Dolor Salah',
            category : 'Magazine',
            color : 'green',
            img : Rp1
        },
        {
            name : 'Lorem Ipsum Dolor Salah',
            category : 'Design',
            color : 'grey',
            img : Rp2
        },        {
            name : 'Lorem Ipsum Dolor Salah',
            category : 'Photography',
            color : 'blue',
            img : Rp3
        },
        {
            name : 'Lorem Ipsum Dolor Salah',
            category : 'Book',
            color : 'red',
            img : Rp4
        },
        {
            name : 'Lorem Ipsum Dolor Salah',
            category : 'UI Design',
            color : 'pink',
            img : Rp5
        }
    ])

        const [AsoLogo, setRePost] = useState([
        {
            id : 1,
            name : 'CNN',
            img : Cnn
        },
        {
            id : 1,
            name : 'BBC',
            img : Bbc
        },
        {
            id : 1,
            name : 'CNBC',
            img : Cnbc
        },
        {
            id : 1,
            name : 'CBC',
            img : Cbc
        }
    ])
    return (
        <footer>
            <div id = 'footer-container' >
                <div className = 'container flex'>
                <div className = 'footer-block'>
                    <HeaderText name = 'About Us'/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <SosialMedia sm = {sm} />
                </div>
                <div className = 'footer-block'>
                    
                    <HeaderText name = 'Recent Post' />
                    <div id = 'footer-repost-content'>
                    {Repost.map(post => {
                        return(
                            <RecentPost 
                                key = {post.id}
                                name = {post.name}
                                category = {post.category}
                                color = {post.color}
                                img = {post.img}
                            />
                        )
                    })}
                    </div>
                </div>
                <div className = 'footer-block'>
                    <HeaderText name = 'Contact Us' />
                    <a className = 'contact-link' href = 'https://www.google.com/maps/place/Brooklyn+Bridge+-+City+Hall+Subway+Station/@40.7118924,-74.0048375,17.81z/data=!4m13!1m7!3m6!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+Amerika+Birle%C5%9Fik+Devletleri!3b1!8m2!3d40.7127753!4d-74.0059728!3m4!1s0x89c25a222fcb050d:0x8300747c6c6fec23!8m2!3d40.7128218!4d-74.0042836' target = '_blank'>West 23th Street, Suite 721 New York</a>
                    <a className = 'contact-link' href = 'mailto:UserName@mail.com'>Email : UserName@mail.com</a>
                    <a className = 'contact-link' href = 'tel:+1031234567890'> Phone : +1 (03) 123 456 7890</a>
                    <a className = 'contact-link' href = 'fax:+100987654321'> Fax : +1 (0) 0987 654 321</a>
                    <form className = 'flex' >
                        <input type = 'text' placeholder = 'Your Name' className = 'footer-input'/>
                        <input type = 'text' placeholder = 'Your Mail' className = 'footer-input'/>
                        <textarea placeholder = 'Your Message' className = 'footer-input'/>
                        <input type = 'submit' className = 'footer-input' value = 'Send'/>
                    </form>
                </div>
                </div>
                <div id = 'scroll-up' className = 'flex'>
                    <a href = '#header-block' >Scroll Up</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
