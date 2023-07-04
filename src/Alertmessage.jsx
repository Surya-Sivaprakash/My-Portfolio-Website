const Alertmessage = ({ message, type, onClose }) => {
  const alertClasses = `fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50 bg-gray-900`;

  const alertContentClasses = `bg-[#121212] p-20 rounded-md shadow-md`;

  const alertTextClasses =
    type === "success" ? `text-green-600 text-2xl` : `text-red-600`;

  return (
    <div className={alertClasses}>
      <div className={alertContentClasses}>
        <p className={alertTextClasses}>{message}</p>
        <div className="mx-auto text-center">
          <button
            onClick={onClose}
            className="mt-12 px-4 py-2 bg-gray-600 text-white rounded-md "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alertmessage;
