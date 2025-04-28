import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton
					setIsSidebarOpen={(newValue: boolean) => {
						throw new Error('Function not implemented.');
					}}
					isSidebarOpen={false}
				/>
			</>
		);
	},
};
