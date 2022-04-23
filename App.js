import React from "react";
import { TodoState } from "./src/context/todo/TodoState";
import { MainLayout } from "./src/MainLayout";
import {ScreenState} from "./src/context/screen/ScreenState";

export default function App() {
  return (
      <ScreenState>
    <TodoState>
      <MainLayout />
    </TodoState>
      </ScreenState>
  );
}
