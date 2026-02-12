import type { Meta, StoryObj } from '@storybook/react';
import Company from './company';
import companyIcon from "@/shared/assets/company_icon.png"; // Added
import placeIcon from "@/shared/assets/place_icon.png"; // Added
import callIcon from "@/shared/assets/call_icon.png"; // Added
import mailIcon from "@/shared/assets/mail_icon.png"; // Added

const meta = {
  title: 'Widgets/Company',
  component: Company,
  parameters: {
    layout: 'centered',
  },
  argTypes: { // Defined argTypes
    name: { control: 'text', description: 'Name of the company' },
    manager: { control: 'text', description: 'Name of the recruiting manager' },
    detail: {
      control: 'object',
      description: 'Array of detail objects, each with icon, text, and name',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Company>;

export default meta;
type Story = StoryObj<typeof Company>;

export const Default: Story = {
  args: { // Defined default args
    name: '(주)핀다',
    manager: '홍진봉',
    detail: [
        { icon: placeIcon, text: "부산 북부", name: "place" },
        { icon: companyIcon, text: "전자조업보고 시스템", name: "company" },
        { icon: callIcon, text: "010-4855-2794", name: "call" },
        { icon: mailIcon, text: "jbhong@suncom.co.kr", name: "mail" }
    ],
  },
};
