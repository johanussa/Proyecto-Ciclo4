import { gql } from "apollo-server-core";
import { typeProject } from "../models/project/TypesProject";

const allTypes = gql`
    scalar Date
`;

export const typesDefs = [ allTypes, typeProject ];