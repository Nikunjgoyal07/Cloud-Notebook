import React, { useState, useEffect } from 'react';
import ContentModal from '../modelAndWarningComponents/ContentModal';
import Notecomponent from './notecomponent';
export default function Notes() {
  const [userExists, setUserExists] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nameList, setNameList] = useState([]);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    if (document.cookie) {
      const cookiecheck = document.cookie.split(';');
      const cookiedictionary = {};
      cookiecheck.forEach(element => {
        const key = element.split('=')[0].trim();
        const value = element.split('=')[1].trim();
        cookiedictionary[key] = value;
      });
      const emailAdress = cookiedictionary.email;
      const password = cookiedictionary.password;

      const checkwithbackend = async () => {
        try {
          // fetch(`https://noteapibackend.onrender.com/api/signin?email=${emailAdress}&password=${password}`)
          const response = await fetch(`https://noteapibackend.onrender.com/api/getnotes?email=${emailAdress}&password=${password}`);
          const data = await response.json();
          let stringData = JSON.stringify(data);
          let parsedData = JSON.parse(stringData);
          let nameList = [];
          let contentList = [];
          for (let i in parsedData) {
            let notedatas = parsedData[i];
            let subnameList = [];
            let subcontentList = [];
            for (let j in notedatas) {
              subnameList.push(j);
              subcontentList.push(notedatas[j]);
            }
            subnameList.splice(0, 3);
            subcontentList.splice(0, 3);
            subnameList = subnameList.toString();
            subcontentList = subcontentList.toString();
            nameList.push(subnameList);
            contentList.push(subcontentList);
          }
          setNameList(nameList);
          setContentList(contentList);
          
          
          if (!data) {
            alert("User not signed in");
          } else {
            setUserExists(true);
          }
        } catch (error) {
          console.error('Error sending data to backend:', error);
          // Handle the error and show appropriate feedback to the user.
        }
      };

      checkwithbackend();
    }
    else {
      setShowModal(true);
    }
  }, []);
  return (
    showModal ? (<ContentModal />) :
      (<div>
        {contentList.map((content, index) => (
          <Notecomponent key={index} name={nameList[index]} content={content} />
        ))}
      </div>)
  )
}
