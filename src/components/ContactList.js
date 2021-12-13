import React from "react";
import Contact from "./Contact";

export default function ContactList({contacts}){
    //export default function ContactList({contactList}){
    return (
        <ol>
            {contacts.map((contact)=>{
                <Contact contact={contact}/>
                //<li>item</li>
            })}            
        </ol>
    )
}