import { motion, AnimatePresence } from "framer-motion";
import WhatsappForm from "../forms/WhatsappForm";

const BookingModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
        >
          <WhatsappForm onClose={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;