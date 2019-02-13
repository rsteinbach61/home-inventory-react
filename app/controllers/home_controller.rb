require 'pry'
class HomeController < ApplicationController

  def index
    @homes = Home.all
    render json: @homes
  end

  def new
    @home = Home.new(home_params)
  end

  def create
binding.pry
@home = Home.new(name: params[:text])
@home.save
render json:@home
  end

  def delete
    @home = Home.find_by(id: params[:_json])
    @home.destroy
  end

 private
   def home_params
     params.require(:home).permit(:name, :user_id, :room_id)
   end

end
