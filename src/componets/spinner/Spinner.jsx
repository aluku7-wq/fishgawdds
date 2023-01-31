import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Spinner.styled";

const Spinner = ({ message }) => {
  return (
    <Container>
      {!message.status ? (
        <>
          <motion.div
            className="large_circle"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="small_circle"
            animate={{ scale: 0, opacity: 1 }}
            initial={{ scale: 1, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
          ></motion.div>
        </>
      ) : (
        <div className="message">
          <h2 style={{ color: message.type == "success" ? "green" : "red" }}>
            {message.value}
          </h2>
          {/* <AiOutlineClose className="icon" /> */}
        </div>
      )}
    </Container>
  );
};

export default Spinner;
