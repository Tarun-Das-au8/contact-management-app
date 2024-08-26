import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contactsSlice";

// Define the props for the ContactForm component
interface ContactFormProps {
  existingContact?: {
    id: number;
    firstName: string;
    lastName: string;
    status: boolean;
  };
  onClose: () => void; // Function to close the form/modal
}

const ContactForm: React.FC<ContactFormProps> = ({
  existingContact,
  onClose,
}) => {
  const [firstName, setFirstName] = useState<string>(
    existingContact?.firstName || ""
  );
  const [lastName, setLastName] = useState<string>(
    existingContact?.lastName || ""
  );
  const [status, setStatus] = useState<boolean>(
    existingContact?.status || true
  );

  // Get the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  // Effect to initialize form fields if an existing contact is provided
  useEffect(() => {
    if (existingContact) {
      setFirstName(existingContact.firstName);
      setLastName(existingContact.lastName);
      setStatus(existingContact.status);
    }
  }, [existingContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new contact object or update the existing one
    const newContact = {
      id: existingContact?.id || Date.now(), // Use existing contact ID or generate a new one
      firstName,
      lastName,
      status,
    };

    // Dispatch either an update or add action based on the presence of an existing contact
    if (existingContact) {
      dispatch(updateContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    onClose(); // Close the form/modal after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <label className="w-1/3">First Name: </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="w-1/3">Last Name: </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="flex items-center space-x-4">
        <label>Status: </label>
        <div className="flex items-center">
          <input
            type="radio"
            name="status"
            value="active"
            checked={status}
            onChange={() => setStatus(true)}
            className="mr-2"
          />
          Active
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="status"
            value="inactive"
            checked={!status}
            onChange={() => setStatus(false)}
            className="mr-2"
          />
          Inactive
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {existingContact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
