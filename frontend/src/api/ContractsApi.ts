import { EndorseeModel } from "@/models/EndorseeModel";
import { EventModel } from "@/models/EventModel";

export default class ContractsApi {
  private static events: Map<string, EventModel> = new Map();

  constructor() {
    const mockEndorsee = new EndorseeModel('Mock Endorsee', '0xMockAddress');
    const mockEvent = new EventModel('95ccae2f78868f3e2a4bd22e796701461f993d22373068bf27edee61d50aa3de', 'Event Completed', 'This is a mock event', [mockEndorsee], '2022-01-01', '2022-12-31', 'mockPassword');
    ContractsApi.events.set(mockEvent.id, mockEvent);


    const mockEndorsee2 = new EndorseeModel('Not completed', '0xMockAddress');
    const mockEvent2 = new EventModel('95ccae2f78868f3e2a4bd22e796701461f993d22373068bf27edee61d50aa3d2', 'Event Uncompleted', 'This is a mock event', [mockEndorsee2], '2022-01-01', '2024-04-14', 'mockPassword');
    ContractsApi.events.set(mockEvent2.id, mockEvent2);
  }

  async submitFeedback(feedback: string, password: string) {
    console.log(`submitFeedback ${feedback}, ${password}`);
  }

  async claimFeedback(password: string) {
    console.log(`claimFeedback password: ${password}`);
  }

  async getEvents() {
    return Array.from(ContractsApi.events.values());
  }

  async getEventsById(id: string): Promise<EventModel | null> {
    const event = ContractsApi.events.get(id) || null;
    console.log(`getEventsById: events: ${ContractsApi.events.keys.length}, event: ${event}`)
    return event;
  }

  async createEvent(name: string, description: string, endorseees: EndorseeModel[], startDate: string, endDate: string, password: string) {
    const event = new EventModel('id', name, description, endorseees, startDate, endDate, password);
    ContractsApi.events.set(event.id, event);

    console.log(`events: ${ContractsApi.events}`);
  }

}