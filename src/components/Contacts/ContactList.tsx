import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteContact } from "../../redux/contactsSlice";

interface ContactListProps {
  onEdit: (contact: any) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEdit }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl mb-4">Contacts List</h2>
      {contacts.length === 0 ? (
        <p className="text-center">
          No Contacts Found, Please add contact from Create Contact button
        </p>
      ) : (
        contacts.map((contact) => (
          <div
            key={contact.id}
            className="border p-4 mb-4 flex justify-between"
          >
            <div>
              <p>
                <strong>First Name:</strong> {contact.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {contact.lastName}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {contact.status ? "Active" : "Inactive"}
              </p>
            </div>
            <div className="space-x-2">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => onEdit(contact)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
