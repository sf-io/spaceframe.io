import type { Meta, StoryFn, StoryObj } from '@storybook/angular';
import { CommitsComponent } from './commits.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';

const meta: Meta<CommitsComponent> = {
  title: 'Commits',
  component: CommitsComponent,
};

export default meta;
type Story = StoryObj<CommitsComponent>;

export const SecondStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
