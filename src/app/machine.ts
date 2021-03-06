import { Events } from "./events";

export interface Machine {
    status: string;
    machine_type: string;
    longitude: number;
    latitude: number;
    last_maintenance: string;
    install_date: string;
    id: string;
    floor:  number;
    events: Events[];
  }