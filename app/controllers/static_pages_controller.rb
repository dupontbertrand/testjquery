class StaticPagesController < ApplicationController
  def home
    @registration = Registration.new
  end
end
