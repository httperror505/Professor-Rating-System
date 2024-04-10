import React from "react";
import useSubjectTeacher from "../Store/useSubjectTeacher";
import useUserInformation from "../Store/useUserInformation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useQuerySubjectTeacher() {
  const setsubjectTeacher = useSubjectTeacher(
    (state) => state.setsubjectTeacher
  );
  const userInformation = useUserInformation((state) => state.information);

  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: [197, "teachingsubss"],
    queryFn: async () => {
      try {
        // const response = await axios.get(
        //   `https://ratemyteacher.onrender.com/teacherSubjects`,
        //   {
        //     headers: {
        //       authorization: `${localStorage.getItem("token")}`,
        //     },
        //   }
        // );
        const response = await axios.get(
          `http://localhost:3300/teacherSubjects`,
          {
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.data;
        setsubjectTeacher(data);
        return data;
      } catch (error) {
        console.error(error);
      }
      return "ee";
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    refetch,
    isLoading,
    isRefetching,
  };
}
