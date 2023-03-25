import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardBody,
  Tag,
  Avatar,
  TagLabel,
  Heading,
  Badge,
  Stack,
  StackDivider,
  SimpleGrid,
  CardHeader,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import "./style.css";
import Form from "./Form";

// Basic api routes:-https://muddy-cyan-sneakers.cyclic.app
const Home = () => {
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    const res = await axios.get(`https://muddy-cyan-sneakers.cyclic.app/tasks`);
    const data = await res.data;
    setTasks(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box className="container">
      <Box className="container-nav">
        <Form getData={getData}  tasks={tasks} />
      </Box> 
      <Box className="container-main">
        <Box className="container-left">
          <Box className="card-box">
            <Badge colorScheme="green">
              <Heading>User</Heading>
            </Badge>

            {tasks?.map((item) => (
              <Card key={item._id}>
                <CardBody>
                  <Tag size="lg" colorScheme="red" borderRadius="full">
                    <Avatar
                      src={item.assignedBy.image}
                      size="xs"
                      name={item.assignedBy.username}
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>{item.assignedBy.username}</TagLabel>
                  </Tag>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
        <Box className="container-mid">
          <Box className="card-box">
              <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              >
            {tasks?.map((item) => (
                <Card>
                  <CardHeader>
                    <Heading size="md">{item.sprintName}</Heading>
                  </CardHeader>
                  <CardBody>
                  <Heading size="sm">{item.category}</Heading>

                    <Text>
                      {item.taskDescription}
                    </Text>
                  </CardBody>
                  <CardFooter>
                  <Tag size="lg" colorScheme="red" borderRadius="full">
                    <Avatar
                      src={item.assigne.image}
                      size="xs"
                      name={item.assigne.username}
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>{item.assigne.username}</TagLabel>
                  </Tag>
                  </CardFooter>
                </Card>
            ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Box className="container-right">
          <Box className="card-box">
            <Badge colorScheme="purple">
              <Heading>Assigned To</Heading>
            </Badge>

            {tasks?.map((item) => (
              <Card key={item._id}>
                <CardBody>
                  <Tag size="lg" colorScheme="red" borderRadius="full">
                    <Avatar
                      src={item.assigne.image}
                      size="xs"
                      name={item.assigne.username}
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>{item.assigne.username}</TagLabel>
                  </Tag>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
