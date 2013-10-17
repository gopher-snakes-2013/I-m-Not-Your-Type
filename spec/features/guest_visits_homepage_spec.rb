require 'spec_helper'

feature "Guest visits home page" do
  background do
    visit "/"
  end

  scenario "Guest can see the name of the site and required text" do
    expect(page).to have_content("I'm Not Your Type!")
    expect(page).to have_content("With great power comes great responsibility.")
  end

  scenario "Guest can type into a text area" do
    fill_in('Type Box', :with => 'With great power failsauce')
    expect(page).to have_content('With great power failsauce')
  end

  scenario "Guest can see text being built below text area" do
    fill_in('Type Box', :with => 'With great power failsauce')
    page.should have_css('span#text', :text == 'With great power failsauce')
  end

  xscenario "Guest can see seconds elapsed and words per minute" do
    fill_in('Type Box', :with => "With great power comes great responsibility.")
    expect(page).to have_content("Second Elapsed:")
    expect(page).to have_content("WPM:")
  end
end