require 'spec_helper'

feature "Guest visits home page" do
  scenario "They see the name of the site" do
    visit "/"
    expect(page).to have_content "I'm Not Your Type!"
  end
end