import { Redirect } from "expo-router";

export default function RoutesPrivated() {
    return <Redirect href={ "/home" } />;
}