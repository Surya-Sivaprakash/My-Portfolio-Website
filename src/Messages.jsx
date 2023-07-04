import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Messages = () => {
  const [leads, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Leads");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      //   console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <div>
        {leads.map((user) => {
          return (
            <div>
              <div>{user.Name}</div>
              <div>{user.Email}</div>
              <div>{user.Message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
