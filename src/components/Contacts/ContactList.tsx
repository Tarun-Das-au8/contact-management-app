import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteContact } from "../../redux/contactsSlice";

// Define props for the ContactList component
interface ContactListProps {
  onEdit: (contact: any) => void; // Function to trigger the editing of a contact
}

const ContactList: React.FC<ContactListProps> = ({ onEdit }) => {
  // Use Redux to get the list of contacts from the store
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Get the dispatch function to dispatch actions to Redux
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id)); // Dispatch the deleteContact action to remove the contact from the store
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl mb-4">Contacts List</h2>

      {/* Display message if there are no contacts, otherwise show the list of contacts */}
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
            {/* Buttons for editing and deleting a contact */}
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
