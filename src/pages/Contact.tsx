import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../components/Contacts/ContactForm";
import ContactList from "../components/Contacts/ContactList";

// Set the root element for accessibility (required for react-modal)
Modal.setAppElement("#root");

const Contact: React.FC = () => {
  // State to track whether the modal is open or closed
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  // State to track the selected contact for editing
  const [selectedContact, setSelectedContact] = useState<any>(null);

  // Function to open the modal
  const openModal = () => setModalIsOpen(true);

  // Function to close the modal and reset selected contact
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedContact(null);
  };

  // Function to handle editing a contact by opening the modal and setting the selected contact
  const handleEdit = (contact: any) => {
    setSelectedContact(contact);
    openModal();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded w-48"
        >
          Create Contact
        </button>
      </div>
      {/* Modal for creating or editing contacts */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <div className="mt-2 mb-4 flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {selectedContact ? "Update Contact" : "Create Contact"}
            </h2>
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-2 py-1 rounded"
            >
              X
            </button>
          </div>
          {/* ContactForm component for creating or updating a contact */}
          <ContactForm existingContact={selectedContact} onClose={closeModal} />
        </div>
      </Modal>
      {/* ContactList component to display all contacts with the ability to edit */}
      <ContactList onEdit={handleEdit} />
    </div>
  );
};

export default Contact;
