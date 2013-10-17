require 'spec_helper'

feature "Guest visits home page" do
  scenario "Guest can see the name of the site and required text" do
    visit "/"
    expect(page).to have_content("I'm Not Your Type!")
    expect(page).to have_content("With great power comes great responsibility.")
  end

  scenario "Guest can type into a text area" do
    visit "/"
    fill_in('Type_Box', :with => 'With great power failsauce')
    expect(page).to have_content('With great power failsauce')
  end

end