import React from "react";
import { hydrateRoot } from "react-dom/client";
import AppClient from "./AppClient";

hydrateRoot(document.getElementById("root")!, <AppClient />);
