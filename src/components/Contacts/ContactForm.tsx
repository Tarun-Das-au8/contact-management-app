import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contactsSlice";

interface ContactFormProps {
  existingContact?: {
    id: number;
    firstName: string;
    lastName: string;
    status: boolean;
  };
  onClose: () => void;
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

  const dispatch = useDispatch();

  useEffect(() => {
    if (existingContact) {
      setFirstName(existingContact.firstName);
      setLastName(existingContact.lastName);
      setStatus(existingContact.status);
    }
  }, [existingContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: existingContact?.id || Date.now(),
      firstName,
      lastName,
      status,
    };
    if (existingContact) {
      dispatch(updateContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }
    onClose();
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
