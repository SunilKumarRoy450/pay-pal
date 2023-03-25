import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
const initialFormValue = {
  sprintName: "",
  category: "",
  assignedBy: "",
  assigne: "",
  taskDescription: "",
};
const Form = ({ tasks,getData }) => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [users, setUsers] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const res = await axios.get(`https://muddy-cyan-sneakers.cyclic.app/users`);
    const data = await res.data;
    setUsers(data);
  };

  const handleOnInputChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleOnClickSubmitPostForm = async (e) => {
    e.preventDefault();
    const payload = {
      sprintName: formValue.sprintName,
      category: formValue.category,
      assignedBy: formValue.assignedBy,
      assigne: formValue.assigne,
      taskDescription: formValue.taskDescription,
    };
    await axios.post("https://muddy-cyan-sneakers.cyclic.app/tasks/create", payload);
    onClose();
    getData()
  };

  return (
    <div>
      <Button onClick={onOpen}>+ ADD TASKS</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add Tasks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Sprint</FormLabel>
            <Input
              onChange={handleOnInputChange}
              name="sprintName"
              value={formValue.sprintName}
            />
            <FormLabel>Category</FormLabel>
            <Select
              name="category"
              value={formValue.category}
              onChange={handleOnInputChange}
              placeholder="category"
            >
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="story">Story</option>
            </Select>
            <FormLabel>Task Description</FormLabel>
            <Input
              name="taskDescription"
              onChange={handleOnInputChange}
              value={formValue.taskDescription}
            />
            <FormLabel>Assigned By</FormLabel>
            <Select
              name="assignedBy"
              value={formValue.assignedBy}
              onChange={handleOnInputChange}
              placeholder="assigned by"
            >
              {tasks?.map((item) => (
                <option value={item.assignedBy._id}>
                  {item.assignedBy.username}
                </option>
              ))}
            </Select>
            <FormLabel>Assigne</FormLabel>
            <Select
              name="assigne"
              value={formValue.assigne}
              onChange={handleOnInputChange}
              placeholder="assigne"
            >
              {users?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.username}
                </option>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleOnClickSubmitPostForm} variant="outline">
              + add Tasks
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Form;
