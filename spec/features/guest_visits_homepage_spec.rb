require 'spec_helper'

feature "Guest visits home page" do
  scenario "Guest can see the name of the site and required text" do
    visit "/"
    expect(page).to have_content("I'm Not Your Type!")
    expect(page).to have_content("With great power comes great responsibility.")
  end

  scenario "Guest can type into a text area" do
    visit "/"
    fill_in('Type Box', :with => 'With great power failsauce')
    expect(page).to have_content('With great power failsauce')
  end

  scenario "Guest can see text being built below text area" do
    visit "/"
    fill_in('Type Box', :with => 'With great power failsauce')
    page.should have_css('span#text', :text == 'With great power failsauce')
  end

end