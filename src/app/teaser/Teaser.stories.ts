import type { Meta, StoryObj } from '@storybook/angular';
import { TeaserComponent } from './teaser.component';

const meta: Meta<TeaserComponent> = {
  title: 'Teaser',
  component: TeaserComponent,
};

export default meta;
type Story = StoryObj<TeaserComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
