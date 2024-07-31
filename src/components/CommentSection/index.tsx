import {
  Button,
  Checkbox,
  Flex,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

const CommentSection = () => {
  const schema = yup.object({
    comment: yup.string().required("Please Enter Your Comment"),
    name: yup.string().required("Please Enter Your Name"),
    email: yup.string().email().required("Please Enter Your Email"),
    website: yup.string().required("Please Enter Your Website"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    toast.success("Comment Posted Successfully");
  };

  return (
    <Flex flexDir={"column"} gap={8} bgColor={"#ffff"} p={10} id="COMMENT">
      <Text fontSize={32} fontWeight={"normal"}>
        Leave a Comment
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Stack>
            <Textarea placeholder="Leave Comment" {...register("comment")} />
            <Text color="red" fontSize={13}>
              {errors.comment?.message}
            </Text>
          </Stack>
          <Stack>
            <Input placeholder="Name" {...register("name")} />
            <Text color="red" fontSize={13}>
              {errors.name?.message}
            </Text>
          </Stack>
          <Stack>
            <Input placeholder="Email" {...register("email")} />
            <Text color="red" fontSize={13}>
              {errors.email?.message}
            </Text>
          </Stack>
          <Stack>
            <Input placeholder="Website" {...register("website")} />
            <Text color="red" fontSize={13}>
              {errors.website?.message}
            </Text>
          </Stack>
          <Flex gap={4}>
            <Checkbox>
              <Text>
                Save my name, email, and website in this browser for the next
                time I comment.
              </Text>
            </Checkbox>
          </Flex>
          <Button
            mt={4}
            type="submit"
            width={"fit-content"}
            bgColor={"#55555e"}
            color={"#fff"}
            _hover={"#000"}
          >
            Post Comment
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default CommentSection;
