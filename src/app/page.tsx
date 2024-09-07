"use client";
import { Container, Text, Title,Rating,Textarea,Button,Divider,Group,Pagination} from "@mantine/core";
import { useState } from 'react';
import Footer from "@components/Footer";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm" >Your rating</Title>
      <Rating value={value} onChange={setValue} size="lg"/>
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="sm" autosize minRows={3} maxRows={3}
      />
      <Button variant="filled" color="orange" mt="sm">Submit Review</Button>
      <Divider my="sm" />
      <Group justify="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Group justify="center">
      <Text c="dimmed" ta="center">Best pizza in this world. I give you X score.</Text>
      </Group>
      <Divider my="sm" />
      <Group justify="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Group justify="center">
      <Text c="dimmed" ta="center">My favourite part is pepperoni</Text>
      </Group>
      <Group justify="center" mt="sm">
      <Pagination total={20} color="orange" />
      </Group>
      <Group justify="center" mt="sm"><Footer /></Group>
      
    </Container>
  );
}