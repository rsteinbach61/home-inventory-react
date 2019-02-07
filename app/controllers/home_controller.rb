require 'pry'
class HomeController < ApplicationController

  def index
    @homes = Home.all
    render json: @homes
  end

  def new
    @home = Home.new(params)
  end

  def create
#binding.pry
@home = Home.new(name: params[:text])
@home.save
render json:@home
  end

end
