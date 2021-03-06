require 'pry'
class ItemController < ApplicationController

  def new
    @item = Item.new
  end

  def show
    @item = Item.find_by(id: params[:id])
    render json: @item
  end

  def create
    @item = Item.create(item_params)
    render json: @item
  end

  def edit
  end

  def update
    @item = Item.find_by(id: params[:id])
    @item.update(item_params)
    render json: @item
  end

  def index
    @items = Item.all
    render json: @items
  end

  def destroy
    @item = Item.find_by(id: params[:_json])
    @room = Room.find_by(id: @item.room_id)
    @item.destroy
    @items = @room.items
    render json: @items
  end

  private
    def item_params
      params.require(:item).permit(:name, :user_id, :make,:model, :upc, :purchase_date, :serial_num, :purchase_price, :room_id)
    end
end
