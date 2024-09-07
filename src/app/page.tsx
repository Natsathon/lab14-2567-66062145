
"use client";
import { Container, Space , Text, Title,Rating,Textarea,Button,Divider,Group,Pagination} from "@mantine/core";
import { useState } from 'react';

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Space h="sm"/>
      <Title order={4} mt="md" >Your rating</Title>
      <Rating value={0} readOnly size="lg"></Rating>
      <Textarea
      label="Your review"
      placeholder="Do you enjoy eating?"
      mt="md"
      />
      <Button variant="filled" color="orange" mt="md">Submit Review</Button>
      <Divider my="md" />
      <Group justify="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Group justify="center">
        <Text>Best pizza in this world. I give you X score.</Text>
      </Group>
      <Divider my="md" />
      <Group justify="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Group justify="center">
        <Text>My favourite part is pepperoni</Text>
      </Group>
      <Group justify="center" mt="md">
      <Pagination total={20} color="orange" />
      </Group>
      <Text ta="center" my="sm">
        Copyright © 2024 Natsathon Phanamphan 660612145
      </Text>
    </Container>
  );
}